/*****
 * Scripting for trace rastr image and save as EPS for compatibility with image stocks
 * Author: Pavel Nikitaev <devoll@devoll.ru> (2021)
 * Special for Alinafineart
 *****/

// TODO: добавить проверку на входные параметры JPG (для фрипика посмотреть параметры)
// Подправить если можно jpeg (привести к нужным параметрам минимальным или максимальным)
// Если не удается привести к параметрам - выдать ошибку

(() => {

    const sourceFolder = Folder.selectDialog(Helpers.i18n("CHOOSE_SRC_FOLDER")) as Folder;

    if(!sourceFolder){
        alert(Helpers.i18n("CHOOSE_SRC_FOLDER_ERROR"));
        return;
    }

    new Stocks.FreePick(sourceFolder);
})();
