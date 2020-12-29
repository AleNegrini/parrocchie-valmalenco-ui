import { useEffect, useState } from "react";

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
        const APIURL = 'http://127.0.0.1:5000/conf'
        fetch(APIURL)
            .then(res => res.json())
            .then((data) => {
                setTableContent({loading: false, data: data});
            })
        .catch(console.log)
    }, [])

    return (
        
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Parrocchia</th>
                <th scope="col">IP Microfono</th>
                <th scope="col">Porta Microfono</th>
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
                            <td></td>
                        </tr>
                    )
                }
            </tbody>
            </table>
    )
}

export default ConfigTable;