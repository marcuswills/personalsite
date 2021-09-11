import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import  PdfViewer  from './pdfViewer'
import WorkerSrc from '../../../pdf.worker.min.js'

export default class pdfWorker extends React.Component {
    render (){
        return (
            <div>
                <Worker workerSrc={WorkerSrc}>
                    <PdfViewer pdfDir={this.props.pdfDir}/>
                </Worker>
            </div>
        )
    }
};