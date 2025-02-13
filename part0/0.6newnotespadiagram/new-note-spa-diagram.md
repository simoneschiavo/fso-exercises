sequenceDiagram
    participant browser
    participant server

    Note right of browser: User fills the new note form

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 Created
    deactivate server

    Note right of browser: The browser updates the page with the new note without reloading it