export class EmailValuesDTO {

    mailTo: string;
    pdfBytes: File;
    constructor(mailTo: string) {
        this.mailTo = mailTo;

    }
}
