import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Constants from "../utils/Contants";

const ConfigTable = () => {

    interface ITableContent {
        loading: boolean,
        data: any
    }

    const [tableContent, setTableContent] = useState<ITableContent>({
        loading: false,
        data: {}
    });

    useEffect(() => {
        setTableContent({loading: true, data: {}});
        const APIURL = 'http://127.0.0.1:5000/confMic'
        fetch(APIURL)
            .then(res => res.json())
            .then((data) => {
                setTableContent({loading: false, data: data});
            })
        .catch(console.log)
    }, [])

    return (
        
        <div className="container ml-0">
            <div className="col-sm-12 text-left mt-4 pl-0">
                <p className="h3">Setup microfoni</p>
                <hr/>
            </div>
            <div className="row card ml-1">
                <div className="col-sm-12">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">{Constants.conf_tab_f1}</th>
                                <th scope="col">{Constants.conf_tab_f2}</th>
                                <th scope="col">{Constants.conf_tab_f3}</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(tableContent.data).map((item) => 
                                    <tr key={item}>
                                        <td>{item.charAt(0).toUpperCase() + item.slice(1)}</td>
                                        <td>{tableContent.data[item]['cam_ip']}</td>
                                        <td>{tableContent.data[item]['cam_port']}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning mr-1 mb-1 btn-sm">{Constants.edit_label_btn}</button>
                                            <button type="button" className="btn btn-danger mr-1 mb-1 btn-sm">{Constants.del_label_btn}</button>
                                        </td>
                                    </tr>
                                )
                            }
                            <tr key="null">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button type="button" className="btn btn-success btn-sm">{Constants.add_label_btn}</button>
                                        </td>
                                    </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ConfigTable;