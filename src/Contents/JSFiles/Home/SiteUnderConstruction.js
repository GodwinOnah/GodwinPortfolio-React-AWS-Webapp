import image1 from "../../Images/maintenance.jpeg"
import {Pictures} from "./Pictures"

export const SiteUnderConstruction = () => {

    return (
        <div>
            SORRY!! Website will be back soon
            <div class="underConstruction">
                <img src={image1} alt="Site under construction"/>
                <div>
                    <Pictures/>
                </div>
            </div>
        </div>
    )

}
