[![Build Status](https://travis-ci.com/eltonmrk/xlf-translator.svg?branch=main)](https://travis-ci.com/eltonmrk/xlf-translator)

![i18n-translator for deno](images/logo.png?style=centerme)

# i18n-translator - it roars in different languages

Il permet la traduction des formats suivants :
* xlf (par exemple Angular)
* resx (par exemple, Xamarin Forms)

To achieve a fast translation of your application, this library was created. It is based on the translation service of DeepL, which uses AI to achieve an excellent translation result.

## i18n-translator in action

![i18n-translator for deno](images/screenrecording.gif)

## Installation

First, [Deno](https://deno.land) must be installed. Then execute the following command to install the application locally:
```
deno install --unstable -f --allow-read --allow-net --allow-write --allow-env https://deno.land/x/xlf_translator/index.ts
```
## Configuration

Create an `.env` file in the project folder. It should contain the following entries.

```
DEEPL_AUTH_KEY=Authentication Key from DeepL
CONFIG_SOURCE_FILE=Path to message file, e.g. ./languageFolder/messages.xlf
CONFIG_TARGET_PATH=Path to parent folder of generated file, e.g. ./languageFolder/generated
```
or run the command by passing variables 

```
deno run --allow-net --allow-read --unstable --allow-write --allow-env index.ts -- DEEPL_AUTH_KEY=X CONFIG_SOURCE_FILE=Y CONFIG_TARGET_PATH=Z
```

## Execution

In the project folder where the `.env` is located, execute the following command from `xlf-translator`. Sit back and enjoy your coffee, the work is done in a moment.
