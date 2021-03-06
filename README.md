# Trace image script for Adobe Illustrator [Beta]

![Image of Yaktocat](./assets/logo.png)

[Описание по-русски](README_RU.md)

Automation script for trace raster images and save as EPS with options for any photobanks

<img src="assets/images/screenshot.png" alt="screenshot" width="250" align="center"/>

## Supported photobanks:
* Freepik (eps, jpg)
* Shutterstock (jpg)
* Adobe Stock (eps, jpg)
* iStock (eps, jpg)
* Deposit Photos (eps, jpg)

## Requirements
* Adobe Illustrator

## Release
[v0.1.0](https://github.com/devoll/trace-image-batch-ai/releases/tag/v0.1.0)

## How to use
1. Download release script
2. Move the script inside folder `scripts`:
    * for MacOS: `/Applications/Adobe Illustrator 2021/Presets/en-GB/Scripts/`
    * for Windows: `C:\Program Files\Adobe\Adobe Illustrator 2021\Presets\en_GB\Scripts\`
3. Run `Adobe Illustrator` and choose the script `File -> Sctipts` for run it.

## How to build the latest version

Requirements for build latest version of script:

* NodeJS
* NPM
* Git

```bash
git clone https://github.com/devoll/trace-image-batch-ai.git
cd trace-image-batch-ai
npm install
npm run build
```

Latest version will be inside `dist` folder

### [CHANGELOG](CHANGELOG.md)
