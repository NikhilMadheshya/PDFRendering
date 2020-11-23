import React,{PureComponent} from 'react';
import PDFView from './Pdfviewer.jsx';
class App extends PureComponent {
    render() { 
        return (
            <section className='container'>
                <PDFView/>
            </section>
        );
    }
}
 
export default App;