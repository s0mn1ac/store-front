export class CalendarProperties {
    firstDayOfWeek = 1;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    dateFormat = 'dd/mm/yy';
    hourFormat = '24';
    today: string;
    clear: string;

    constructor(language: string) {
        switch (language) {
            case 'es':
                this.dayNames = [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ];
                this.dayNamesShort = [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ];
                this.dayNamesMin = [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ];
                this.monthNames = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ];
                this.monthNamesShort = [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ];
                this.today = 'Hoy';
                this.clear = 'Borrar';
                break;
            default:
                this.dayNames = [ 'Sunday',  'Monday',  'Tuesday',  'Wednesday',  'Thursday',  'Friday',  'Saturday' ];
                this.dayNamesShort = [ 'Sun',  'Mon',  'Tue',  'Wed',  'Thu',  'Fri',  'Sat' ];
                this.dayNamesMin = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];
                this.monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',  'July', 'August', 'September', 'October', 'November', 'December' ];
                this.monthNamesShort = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
                this.today = 'Today';
                this.clear = 'Clear';
                break;
        }

    }
}
