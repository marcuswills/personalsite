// Import the main component
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



const pdfViewer = ({pdfDir}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <Viewer plugins={[defaultLayoutPluginInstance]} defaultScale={1} fileUrl={pdfDir} />
        </>
    )
};

export default pdfViewer;