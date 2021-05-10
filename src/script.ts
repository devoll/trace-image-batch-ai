/*****
 * Scripting for trace rastr image and save as EPS for compatibility with image stocks
 * Author: Pavel Nikitaev <devoll@devoll.ru> (2021)
 * Special for Alinafineart
 *****/

// TODO: добавить проверку на входные параметры JPG (для фрипика посмотреть параметры)
// Подправить если можно jpeg (привести к нужным параметрам минимальным или максимальным)
// Если не удается привести к параметрам - выдать ошибку

(() => {

    switch(app.name){
        case 'Adobe Illustrator':
            AdobeIllustratorInit();
            break;

        default:
            alert(Helpers.i18n("UNSUPPORTED_APP") + ": " + app.name);
            break;
    }


})();

function AdobeIllustratorInit(){

    // тут будет цикл по стокам, а пока
    const configs: TI.IConfig[] = [
        /**
         * FREEPIK
         */
        {
            name: "Freepik",
            vectorRequirements: {
                resolution: {
                    max: 80 * 1000 * 1000
                }
            },
            rasterRequirements: {
                width: {
                    min: 2000,
                    max: 8000
                },
                height: {
                    min: 2000,
                    max: 8000
                }
            },
            releaseFile: false
        },

        /**
         * ShutterStock
         */
        {
            name: "Shutterstock",
            vectorRequirements: false,
            rasterRequirements: {
                resolution: {
                    min: 4 * 1000 *1000
                }
            },
            releaseFile: false
        },

        /**
         * Adobe Stock
         */
        {
            name: "Adobe Stock",
            vectorRequirements: {
                resolution: {
                    min: 15 * 1000 * 1000,
                    max: 68 * 1000 * 1000
                }
            },
            rasterRequirements: {
                resolution: {
                    min: 4 * 1000 *1000,
                    max: 100 * 1000 * 1000
                }
            },
            releaseFile: false
        },

        /**
         * iStock
         */
        {
            name: "iStock",
            vectorRequirements: {
                resolution: {
                    min: 15 * 1000 * 1000,
                    max: 68 * 1000 * 1000
                }
            },
            rasterRequirements: {
                width: {
                    min: 1900,
                    max: 2800
                },
                height: {
                    min: 1900,
                    max: 2800
                }
            },
            releaseFile: false
        },

        /**
         * Deposit Photos
         */
        {
            name: "Deposit Photos",
            vectorRequirements: {
                resolution: {
                    min: 3.8 * 1000 * 1000
                }
            },
            rasterRequirements: {
                resolution: {
                    min: 3.8 * 1000 * 1000
                }
            },
            releaseFile: false
        },
    ];

    const uiWindow = new Libs.UI();
    uiWindow.ShowWindow(configs, (cfgs: TI.IConfig[], sourceFiles: File[]) => {

        if(!sourceFiles || sourceFiles.length === 0){
            alert("Не выбраны файлы для обработки");
            return;
        }

        if(!cfgs || cfgs.length === 0){
            alert("Не выбраны стоки");
            return;
        }

        for(let config of cfgs){

            let stock = new Libs.StockSaver(config);

            for(let file of sourceFiles){

                const sourceDoc = app.open(file) as IllustratorDocument; // return document object)
                stock.process(sourceDoc)
                sourceDoc.close(SaveOptions.DONOTSAVECHANGES);
            }
        }
    });


}
