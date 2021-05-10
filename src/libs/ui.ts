namespace Libs {

    export class UI {

        private configs: TI.IConfig[] = [];
        private files: File[] = [];
        private UiFileListBox: ContainerObject | undefined;

        public ShowWindow(configs: TI.IConfig[], fn: (configs: TI.IConfig[], files: File[]) => void){

            this.configs = configs;
            const w: UiWindow = new Window(
                TI.WindowType.dialog,
                "Trace image script"
            );

            w.preferredSize = [ 200, 300 ];

            w.configPanel = w.add("panel", undefined, Helpers.i18n("TITLE_USED_STOCKS")) as ContainerObject;
            w.configPanel.alignChildren = 'left';

            const configCheckboxes: { [key: string]: ControlObject } = {};

            // Show stock configs
            for(let c of configs) {
                configCheckboxes[c.name] = w.configPanel.add("checkbox", undefined, c.name) as ControlObject;
            }

            this.UiFileListBox = w.add("statictext", undefined, `${Helpers.i18n("SELECTED_FILES")}: 0`) as ContainerObject;
            // this.UiFileListBox = w.add('ListBox', { width: 100, height: 50, x: 0, y:0 }, 'Files for proccessing', {
            //     numberOfColumns: 2, showHeaders: true, columnTitles: [ 'Name', 'Type' ]
            // }) as ContainerObject;

            // Set control button for run script
            const chooseFileButton = w.add("button", undefined, Helpers.i18n("CHOOSE_FILES_BUTTON")) as ControlObject & { onClick: () => void};
            chooseFileButton.onClick = () => {
                this.ChooseSourceFiles();
            };

            //
            const runButton = w.add("button", undefined, Helpers.i18n("RUN_BUTTON")) as ControlObject & { onClick: () => void};
            runButton.onClick = () => {
                // отобрать заюзаные конфиги и передать их в колбек функцию
                const selectedConfigs: TI.IConfig[] = [];

                for( let c of configs ){
                    if(configCheckboxes[c.name] && configCheckboxes[c.name].value){
                        selectedConfigs.push(c);
                    }
                }

                if(!selectedConfigs || selectedConfigs.length === 0){
                    alert(Helpers.i18n("STOCK_NOT_SELECTED"));
                    return;
                }

                if(!this.files || this.files.length === 0){
                    alert(Helpers.i18n("FILES_NOT_SELECTED"));
                    return;
                }

                w.hide();
                fn(selectedConfigs, this.files);
            };

            w.show();

        }

        private ChooseSourceFiles(): void {
            this.files = [];
            this.UiUpdateFileList();
            const sourceFiles = File.openDialog(Helpers.i18n("CHOOSE_SRC_FILE"), "*.jpg|*.jpeg|*.ai|*.eps", true) as File[];
            // this.files = this.files.concat(sourceFiles);
            this.files = sourceFiles;
            this.UiUpdateFileList();
        }

        private UiUpdateFileList(): void {
            if(this.UiFileListBox === undefined) return;

            this.UiFileListBox.text = `${Helpers.i18n("SELECTED_FILES")}: ${this.files.length}`;
            // this.UiFileListBox.removeAll();
            // for(let file of this.files){
            //     this.UiFileListBox.add('item', file.name);
            // }
        }
    }

    class UiWindow extends Window {
        configPanel?: ContainerObject;
    }
}
