

import { Head } from "./head";
import { Foot } from "./foot.jsx";
import { BaseDemo } from "./base";
import { CssDemo } from "./cssDemo";
import { EventDemo } from "./eventDemo";
export class IndexView extends Component{
    render() {
        return (
            <div>
                <h2>indexview======IndexView</h2>
                <Head />
                <hr/>
                {/* <BaseDemo/> */}
                {/* <CssDemo></CssDemo> */}
                <EventDemo></EventDemo>
                <hr />
                <Foot/>
            </div>
        );
    }
}