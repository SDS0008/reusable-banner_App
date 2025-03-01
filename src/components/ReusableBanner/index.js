
import './index.css'

const ReusableBanner = props => {

    const { sourceItem } = props;
    const { headerText, description, className } = sourceItem;

    return (
        <li className={ className }>
            <div>
                <h1 className='card-heading'>
                    { headerText }
                </h1>
                <p className='card-description'>
                    { description }
                </p>
                <button type="button" className="card-btn">Show More</button>
            </div>
        </li>
    )

}

export default ReusableBanner;