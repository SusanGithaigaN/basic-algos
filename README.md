# Basic Algos

## Section A

- Write a function that will take input from the user and check if it is palindrome, if the word is not palindrome then return it
  in the reverse order. For example "hello" is not a palindrome, it should return "olleh“

### Walkthrough

To test the code, follow these steps:

1. Fork/ clone this repository
2. Open the project in Visual Studio Code
3. To install the `prompt-sync` package in this project, open the project terminal.
4. To install the prompt-sync package in a JavaScript project, you'll need to have Node.js and npm (Node Package Manager) installed on your system. [Install node js here](https://nodejs.org/en/download)
5. You need to initilize your project with npm. To do this, run the following command and follow the prompts:
   `npm init`

- This command will create a package.json file where your project's dependencies will be listed.

6. Install prompt sync by running the following comand:
   `npm install prompt-sync`

- This will download and install the prompt-sync package and its dependencies in your project directory. After the installation is complete, you'll be able to use the package in your JavaScript code.

7. To test the file, run the following command on the terminal:
   `node palindrome.js`

## Section B

- Let's say we have an array of first 45 numbers with one missing number. Need to find a missing integer from the list
  (JavaScript)# basic-algos

## Running the file

To test the file, run the following command on the terminal:
`node missingInteger.js`

## Section C

Complete the following code to make a Javascript based digital clock.

```
    function myDigitalClock(){
    var d1 = new Date();
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var zone = "AM";
    //Write the code here
    //
    //
    }
    myDigitalClock();
```

## Running the file

To test the file, run the following command on the terminal:
`node myDigitalClock.js`

- sample output:

```
    10:17:15 PM
    10:17:16 PM
    10:17:17 PM
    10:17:18 PM
    10:17:19 PM
    10:17:20 PM
    10:17:21 PM
    10:17:22 PM
```
