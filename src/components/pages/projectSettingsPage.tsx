import React from 'react';
import Form from 'react-jsonschema-form'

const schema = {
    title: "Project Settings",
    type: "object",
    properties: {
        projectName: {
            title: "Project Name",
            type: "string"
        },
        dataSource: {
            title: "Data Source",
            type: "string",
            enum: [
                "my-connection-1",
                "my-connection-2"
            ],
            enumNames: [
                "My Connection 1",
                "My Connection 2"
            ]
        },
        // addConnectionButton: {
        //     title: "Add connection",
        //     type: "button"
        // },
        exportFormat: {
            title: "Export Format",
            type: "string",
            enum: [
                "tensorflow",
                "cntk"
            ],
            enumNames: [
                "Tensorflow",
                "CNTK"
            ]
        },
        description: {
            title: "Description",
            type: "string"
        },
        tags: {
            title: "Tags",
            type: "string"
        },
        imageSettings: {

        },
        videoSettings: {

        }
    }
}

export default class ProjectSettingsPage extends React.Component {
    render() {
        return (
            <Form schema={schema} />
        );
    }
}
