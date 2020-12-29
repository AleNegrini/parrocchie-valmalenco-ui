import Sidebar from '../components/Sidebar';

type ConfigHandlerProps = {
    version: string
}

const ConfigHandler = ({version}: ConfigHandlerProps) => {
    return (
        <div className="container-fluid page-body-wrapper">
            <div className="row page-body-wrapper">
                <Sidebar version={version}></Sidebar>
                <div className="col-sm-10">
                    <h2>Config</h2>
                </div>
            </div>
        </div>   
    )
}

export default ConfigHandler;