## Building a Virtual Machine @ Bradfield

> Friday, 2 August 2019

(https://my.bradfieldcs.com/architecture/2019-08/vm-lab/exercise)

In this exercise, you will write a program that simulates the behavior of
computer hardware. Our primary objective is to understand the
fetch-decode-execute cycle of a physical computer, by simulating one.

The device we’re simulating is much simpler than a modern CPU; it has:

- 20 bytes of memory, simulated by an array with length 20
- 3 registers: 2 general purpose register and 1 for the “program counter”
- 5 instructions: load word, store word, add, subtract and halt

```text
00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f 10 11 12 13
01 01 10 01 02 12 03 01 02 02 01 0e ff __ __ __ __ __ __ __
INSTRUCTIONS ---------------------------^ OUT-^ IN-1^ IN-2^
```

The first 13 bytes are reserved for instructions for an executing program.
Our architecture has a very limited instruction set; there are 5 instructions,
and we can map each to a byte value:

```text
load_word   0x01
store_word  0x02
add         0x03
sub         0x04
halt        0xff
```

Furthermore, each of the instructions has “parameters”

```text
load_word  reg (addr)  # Load value at given address into register
store_word reg (addr)  # Store the value in register at the given address
add reg1 reg2          # Set reg1 = reg1 + reg2
sub reg1 reg2          # Set reg1 = reg1 - reg2
halt
```
