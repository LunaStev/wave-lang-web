---
sidebar_position: 3
---

# Run the first program

If you've already installed Wave from the previous installation document, it's time to run your first Wave program.
In this section, we will look over the entire process of writing and running a Wave program step by step using a simple example.

## Create `hello.wave` file

First, create a new file named `hello.wave` in the directory you will be working in.
You can freely specify the file name and extension, but in this example, we use `hello.wave`.

## Write the code

Write the following code in the `hello.wave` file you created.

```wave
fun main() {
    println("Hello Wave");
}
```

In this code, `fun main()` indicates the starting point of execution for a Wave program.
Wave programs always execute from the `main` function.

The `println` function is used to output strings to the standard output and is the most basic function used to display text on the screen.

## Run the program

Once you've finished writing the code, open a terminal and run the following command from the directory where the file is located.

```bash
wavec run hello.wave
```

This command instructs the Wave compiler to compile the source file and immediately execute it.

## Check the output

If the program runs successfully, the following output will appear in the terminal.

```
Hello Wave
```

If you see this output, it means Wave is installed correctly and the program has been written and executed properly.

You have successfully run your first Wave program.
From now on, you can explore Wave's syntax and features one by one to try writing more complex programs.

정밀한 명령어 옵션(`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`)은
`wavec` CLI 문서에서 확인할 수 있습니다.
