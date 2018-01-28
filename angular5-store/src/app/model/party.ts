
export default class Party {
    private userName : string;
    private id:number ; 
    private isOnTime:boolean;
    private isConfirmed:boolean;

    constructor(obj?:any) {

        this.userName = ( obj && obj.userName  ) || "";
        this.isOnTime = ( obj && obj.isOnTime  ) || true;
        this.isConfirmed = ( obj && obj.isConfirmed  ) || true;
        this.id = (obj && obj.id) || 0 ;
    }
};