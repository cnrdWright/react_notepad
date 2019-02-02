const jsonResponse = 
{'Epics' : 
  [
    {
      "Id" : "e123",
      "Title": "Epic 1",
      "StartDate" :"1-25-2019" ,
      "EndDate" : "1-25-2020",
      "e123" : [
        {
          "Id": "s123",
          "Title": "First Story First Epic",
          "CreatedDate" : "1-27-2019",
          "Epic" : "e123",
          "s123" : [
            {
              "Title" : "Note 1",
              "Id" : "n123",
              "Story" : "s123",
              "Date" : "2-22-2019",
              "Text": "This is a Note"
            },
            {
              "Title" : "Note 2",
              "Id" : "n223",
              "Story" : "s123",
              "Date" : "2-22-2019",
              "Text": "This is also a Note"
            }
          ]
        },
        {
          "Id": "s123",
          "Title": "Second Story First Epic",
          "CreatedDate" : "1-27-2019",
          "Epic" : "e123",
          "s123" : [
            {
              "Title" : "Note 1",
              "Id" : "n123",
              "Story" : "s123",
              "Date" : "2-22-2019",
              "Text": "This is a Note"
            },
            {
              "Title" : "Note 2",
              "Id" : "n223",
              "Story" : "s123",
              "Date" : "2-22-2019",
              "Text": "This is also a Note"
            }
          ]
        }
      ]
    },
    {
      "Id" : "e456",
      "Title": "Epic 2",
      "StartDate" :"1-25-2019" ,
      "EndDate" : "1-25-2020",
      "e456" : [
        {
        "Id": "s456",
        "Title": "This is the Second Story",
        "CreatedDate" : "1-27-2019",
        "Epic" : "e456",
        "s456" : [
          {
            "Title" : "Note 1",
            "Id" : "n456",
            "Story" : "s456",
            "Date" : "2-22-2019",
            "Text": "This is a Note"
          },
          {
            "Title" : "Note 2",
            "Id" : "n223",
            "Story" : "s456",
            "Date" : "2-22-2019",
            "Text": "This is also a Note"
          }
        ]
        }
      ]
    }
  ],
  "SelectedEpic" :{
    "Title" : "",
    "Id" : "",
    "Description" : "",
    "Stories" : []
  }
};

export default jsonResponse;