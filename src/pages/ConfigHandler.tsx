import Sidebar from '../components/Sidebar';
import ConfigTable from '../components/ConfigTable';

type ConfigHandlerProps = {
    version: string
}

const ConfigHandler = ({version}: ConfigHandlerProps) => {
    return (
        <div className="container-fluid page-body-wrapper bg-grey">
            <div className="row page-body-wrapper">
                <Sidebar version={version}></Sidebar>
                <div className="col-sm-10">
                    <ConfigTable/>
                </div>
            </div>
        </div>   
    )
}

export default ConfigHandler;