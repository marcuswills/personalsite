import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import  PdfViewer  from './pdfViewer'

export default class pdfWorker extends React.Component {
    render (){
        return (
            <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <PdfViewer pdfDir={this.props.pdfDir}/>
                </Worker>
            </div>
        )
    }
};