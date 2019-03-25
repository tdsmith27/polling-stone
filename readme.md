# The Polling Stone

A Voting App which gives users candidate information as well as state laws for their location

```
GIF PLACEHOLDER
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

```
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21
```

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.
```
    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```
If everything when fine, you should run
```
    brew install node
```
#### Node installation on Linux
```
    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs
```
#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

### Installing

A step by step series of examples that tell you how to get a development env running

run the following command to install all necessary dependencies

```
npm run setup
```

After setup is complete run the following code to launch the service

```
npm run launch
```

End with an example of getting some data out of the system or using it for a little demo


## Running the tests

We are utilizing `react-scripts` for testing through `jest-dom` you can run the testing script by running the following command
```
npm run test
```

# This Repo uses Commitizen

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This allows consistent commit messages accross the project. To commit with Commitizen use the script npm run commit
See more here:
https://www.npmjs.com/package/commitizen

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Ant Design](https://ant.design/) - The design framework used
* [ReactJS](https://reactjs.org/) - ReactJS library used
* [NodeJS](https://nodejs.org/en/) - Used to server routes and database


## Authors

a list of contributors can be found [Here](https://github.com/hratx39-blue-ocean/deep-dive/graphs/contributors)


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
