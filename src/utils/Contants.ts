class Constants {
    static sidebar_title_sub1: string = "Parrocchie";
    static sidebar_title_sub2: string = "Valmalenco";
    static sidebar_footer_year: string = "2021";
    static sidebar_footer_label: string = "Version";

    static navbar_items_label: {[key: string]: string[];} = {
        Menu: ["Calendario,/", "Aggiungi Celebrazione,/"],
        Impostazioni: ["Configurazione IP Mic,/config"]
    }

    static add_label_btn: string = "Aggiungi"
    static edit_label_btn: string = "Modifica"
    static del_label_btn:string = "Elimina"
    static conf_tab_f1:string = "Parrocchia"
    static conf_tab_f2:string = "IP Microfono"
    static conf_tab_f3:string = "Porta Microfono"
}

export default Constants;