const assert = require("assert");

/**
  Building a Virtual Machine @ Bradfield
  Friday, 2 August 2019

  (https://my.bradfieldcs.com/architecture/2019-08/vm-lab/exercise)

  In this exercise, you will write a program that simulates the behavior of
  computer hardware. Our primary objective is to understand the
  fetch-decode-execute cycle of a physical computer, by simulating one.

  The device we’re simulating is much simpler than a modern CPU; it has:

  - 20 bytes of memory, simulated by an array with length 20
  - 3 registers: 2 general purpose register and 1 for the “program counter”
  - 5 instructions: load word, store word, add, subtract and halt

  00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f 10 11 12 13
  01 01 10 01 02 12 03 01 02 02 01 0e ff __ __ __ __ __ __ __
  INSTRUCTIONS ---------------------------^ OUT-^ IN-1^ IN-2^

  The first 13 bytes are reserved for instructions for an executing program.
  Our architecture has a very limited instruction set; there are 5 instructions,
  and we can map each to a byte value:

  load_word   0x01
  store_word  0x02
  add         0x03
  sub         0x04
  halt        0xff

  Furthermore, each of the instructions has “parameters”

  load_word  reg (addr)  # Load value at given address into register
  store_word reg (addr)  # Store the value in register at the given address
  add reg1 reg2          # Set reg1 = reg1 + reg2
  sub reg1 reg2          # Set reg1 = reg1 - reg2
  halt
  ------------------------------------------------------------------------------
  ------------------------------------------------------------------------------
 */

class VM {
  constructor() {
    this.pc = 0;
    this.r1 = null;
    this.r2 = null;
    this.memory = [];
  }

  load(program) {
    assert(program && Array.isArray(program));

    this.write(0, program);
  }

  /**
    Load data into register
   */
  load_word(register, address) {
    assert(register && VM.REGISTERS[register] && address);

    let data = this.read(address, 2); // data is stored in 2 bytes
    this[VM.REGISTERS[register]] = data;
  }

  /**
    Store the value in register to the output device
   */
  store_word(register, output) {
    assert(register && VM.REGISTERS[register] && this[VM.REGISTERS[register]]);

    this.write(output, this[VM.REGISTERS[register]]);
  }

  /**
    Add the two registers, store the result in register1
   */
  add(register1, register2) {
    assert(register1 && VM.REGISTERS[register1]);
    assert(register2 && VM.REGISTERS[register2]);

    // Little Endian
    let [lo1, ho1] = this[VM.REGISTERS[register1]];
    let [lo2, ho2] = this[VM.REGISTERS[register2]];
    let result = [lo1 + lo2, ho1 + ho2];
    this[VM.REGISTERS[register1]] = result;
  }

  /**
    Begins execution of the loaded program
   */
  run(program) {
    assert(program);

    this.load(program);
    this.debug("machine running...\n");

    assert(this.memory, "No program is loaded");

    while (!this.halted()) {
      let [instruction, ...operands] = this.fetch();
      this.execute(instruction, operands);
      this.pc += 3; // move the program counter to next instruction
    }

    this.halt();
  }

  /**
    Fetch the next instruction and related operands
    ASSUME: 1 byte for instruction followed by 1 byte each for two operands
   */
  fetch() {
    return this.read(this.pc, 3);
  }

  /**
    Execute the instruction and operands using supported VM.INSTRUCTIONS lookup
   */
  execute(instruction, operands) {
    assert(instruction && VM.INSTRUCTIONS[instruction]);

    let method = VM.INSTRUCTIONS[instruction];

    if (VM.DEBUG.level)
      this.debug(`${method} (op ${instruction})`, ...operands);

    this[method](...operands);

    this.debug(`${method}(${operands.map(this.toHex)}) executed\n `);
  }

  /**
    Halt the vm
   */
  halt() {
    // console.log("machine halted");
    VM.DEBUG.level = 3;
    this.debug("machine halted");
  }

  /**
    Predicate function that tests whether the next instruction is to HALT
   */
  halted() {
    assert(this.memory[this.pc]);

    let instruction = VM.INSTRUCTIONS[this.read(this.pc, 1)];
    if (VM.DEBUG.level >= 2)
      this.debug(`found new instruction: [${instruction}]`);
    return "halt" === instruction;
  }

  /**
    Read byteCount from address
    @param address index into VM memory from which to read
    @param byteCount integer number of bytes to read, starting at address
    @param silent a flag to turn off logging to avoid redundant output
    @return array containing byteCount bytes from memory
   */
  read(address, byteCount, silent) {
    if (VM.DEBUG.level >= 2 && !silent)
      this.debug(`read ${byteCount} bytes from address ${this.toHex(address)}`);
    return this.memory.slice(address, address + byteCount);
  }

  /**
    write data to VM memory.  if VM memory is empty assume program is being
    loaded and just overwrite VM memory with the program.  Otherwise splice in
    @param address index into VM memory at which to start writing
    @param data array containing data to be written
    @param silent a flag to turn off logging to avoid redundant output
   */
  write(address, data, silent) {
    // assume that an empty memory means we're overwriting, otherwise editing
    let deleteCount = this.memory.length ? data.length : 0;
    if (VM.DEBUG.level >= 2 && !silent)
      this.debug(
        `writing ${data.map(this.toHex)} to address ${this.toHex(address)}\n`
      );

    this.memory.splice(address, deleteCount, ...data);
  }

  /**
    Logging function (as hex) which optionally debugs VM memory
   */
  debug(...args) {
    console.log(args[0], args[1] ? args.slice(1).map(this.toHex) : "");
    if (VM.DEBUG.level === 3) {
      console.log("dumping memory");
      let mem = this.memory.map(this.toHex);
      console.log(mem);
    }
  }

  /**
    Helper function to convert binary to hexadecimal format
    https://stackoverflow.com/a/42203200
   */
  toHex(num) {
    return `0x${num.toString(16).padStart(2, "0")}`;
  }
}

VM.INSTRUCTIONS = {
  0x01: "load_word",
  0x02: "store_word",
  0x03: "add",
  0x04: "sub",
  0xff: "halt"
};

VM.REGISTERS = {
  0x01: "r1",
  0x02: "r2",
  0x0e: "output"
};

VM.DEBUG = { level: 1 }; // level can be 0-info, 1, 2 or 3-verbose

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// prettier-ignore
const program = [
  0x01, 0x01, 0x10,     // load_word r1 (0x10)   # Load input 1 into register 1
  0x01, 0x02, 0x12,     // load_word r2 (0x12)   # Load input 2 into register 2
  0x03, 0x01, 0x02,     // add r1 r2             # Add the two registers, store the result in register 1
  0x02, 0x01, 0x0e,     // store_word r1 (0x0E)  # Store the value in register 1 to the output device
  0xff,                 // halt                  # Stop execution
  0x00,                 //                       # NOOP
  0x00, 0x00,           //                       # Output
  0xa1, 0x14,           // 161 20                # Little Endian so this is 5281
  0x0c, 0x00            // 12                    # Little Endian so this is 12
]

const computer = new VM();
computer.run(program);

/***********************************

the math should work out like this:

0xa1, 0x14
0x0c, 0x00 +
----------
0xad, 0x14

************************************/

assert(computer.read(0x0e, 2, true).join("") === [0xad, 0x14].join(""));
console.log("ok");
