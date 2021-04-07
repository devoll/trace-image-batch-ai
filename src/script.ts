/*****
 * Scripting for trace rastr image and save as EPS for compatibility with image stocks
 * Author: Pavel Nikitaev <devoll@devoll.ru> (2021)
 * Special for Alinafineart
 *****/

import {i18n} from "./libs/helpers";

// TODO: добавить проверку на входные параметры JPG (для фрипика посмотреть параметры)
// Подправить если можно jpeg (привести к нужным параметрам минимальным или максимальным)
// Если не удается привести к параметрам - выдать ошибку

(() => {
    const sourceFolder = Folder.selectDialog(i18n("CHOOSE_SRC_FOLDER")) as Folder;

    if(!sourceFolder){
        alert(i18n("CHOOSE_SRC_FOLDER_ERROR"));
        return;
    }

    const files = sourceFolder.getFiles("*.jpg");

    if(!files || files.length == 0){
        alert(i18n("CHOOSE_SRC_FOLDER_EMPTY"));
        return;
    }

    for(let i=0; i<files.length; i++){
        const file = files[i];

        if(file instanceof Folder) continue;

        const sourceDoc = app.open(file); // return document object

        const pluginItem = traceImage(sourceDoc.pageItems[0]);
        resizeItem(pluginItem);
        changeArtboard(sourceDoc, pluginItem);


        // save file
        var newName = getNewName(sourceFolder, sourceDoc.name);
        sourceDoc.saveAs(newName, getEpsOptions());
        sourceDoc.close();
    }
})();


/**
 * Trace raster image
 * @param {object} rasterItem
 * @returns {Object} traced image PluginItem
 */
function traceImage(rasterItem: RasterItem){
    const pluginItem = rasterItem.trace();
    pluginItem.tracing.tracingOptions.loadFromPreset("High Fidelity Photo");

    return pluginItem;
}

/**
 * Resize image
 * @param {Object} pluginItem
 */
function resizeItem(pluginItem: PluginItem){
    const basedResolution = 4194304;
    const upTo = Math.sqrt(basedResolution / (pluginItem.width * pluginItem.height));

    pluginItem.width = Math.round(pluginItem.width * upTo);
    pluginItem.height = Math.round(pluginItem.height * upTo);
}

/**
 * Fit artboard to image
 * @param {Object} sourceDoc
 * @param {Object} pluginItem
 */
function changeArtboard(sourceDoc: Document, pluginItem: PluginItem){
    const rect = sourceDoc.pathItems.rectangle(pluginItem.top, pluginItem.left, pluginItem.width, pluginItem.height);
    sourceDoc.artboards[0].artboardRect = rect.geometricBounds;
    sourceDoc.pathItems.removeAll();
}

/**
 *
 * @param {Object} sourceFolder Source folder
 * @param {String} originName Original filename
 * @returns {Object} file
 */
function getNewName(sourceFolder: Folder, originName: string){
    const fileName = originName.split(".");
    fileName.pop();
    const newName = fileName.join(".") + ".esp";
    const saveInFile = new File( sourceFolder + '/' + newName );
    return saveInFile;
}

/**
 * Return EPS save options
 * @returns {Object} EPS save options
 */
function getEpsOptions(){
    const saveOptions = new EPSSaveOptions();
    saveOptions.artboardRange = "";
    saveOptions.cmykPostScript = true;
    saveOptions.compatibility = Compatibility.ILLUSTRATOR10;
    saveOptions.compatibleGradientPrinting = false;
    saveOptions.embedAllFonts = false;
    saveOptions.embedLinkedFiles = true;
    // saveOptions.flattenOuput
    saveOptions.includeDocumentThumbnails = true;
    // saveOptions.overprint
    saveOptions.postScript = EPSPostScriptLevelEnum.LEVEL2;
    saveOptions.preview = EPSPreview.TRANSPARENTCOLORTIFF;
    saveOptions.saveMultipleArtboards = false;

    return saveOptions;
}
