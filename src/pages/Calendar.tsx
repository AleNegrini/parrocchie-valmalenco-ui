import Sidebar from '../components/Sidebar';

type CalendarProps = {
    version: string
}

const Calendar = ({version}: CalendarProps) => {
    return (
        <div className="container-fluid page-body-wrapper">
            <div className="row page-body-wrapper">
                <Sidebar version={version}></Sidebar>
                <div className="col-sm-10">
                    <h2>Calendario</h2>
                </div>
            </div>
        </div>
    )
}

export default Calendar;