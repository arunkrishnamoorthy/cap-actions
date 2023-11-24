namespace cap.actions.demo;

using {
    cuid,
    sap.common.CodeList as CodeList,
    managed
} from '@sap/cds/common';

entity Inquiries: cuid, managed {
    category: Association to Category @title : 'Category';
    inquiry: String(1000) @title: 'Inquiry';
    startedAt: DateTime @title: 'Started At';
    answer: String(1000) @title: 'Answer';
    status: Association to Status @title: 'Status';
    satisfaction: Integer @title: 'Satisfaction' 
        enum {
             veryUnsatisfied = 1;
            unsatisfied = 2;
            neutral = 3;
            satisfied = 4;
            verySatisfied = 5
        }  ;
    // virtual startEnabled: Boolean;
    // virtual endEnabled: Boolean;
}   

entity Category: CodeList {
    key code : String(1);
}

entity Status: CodeList {
    key code: String(1);
}
