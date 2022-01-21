import './winner-box.scss';

const WinnerBox = () => {

    return (
        <div className='winner-box'>
            <p className='winner-box__text'>you win</p>
            <div className='winner-box__button'>play again</div>
        </div>
    );
};

export default WinnerBox;