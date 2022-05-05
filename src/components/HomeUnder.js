import underimg from '../underimg.svg'

const HomeUnder = () => (
    <div className='sidebyside'>
        <div className='homeunderleft' style={{flexBasis: '45%'}}>
            <div>
            <img style={{
                        width: '300px',
                        height: '400px'
                    }} alt='some value' src={underimg}/>
            </div>
        </div>
        <div className='homeunderright' style={{flexBasis: '65%'}}>
            <div style={{paddingBottom:'20px', fontWeight: '500', textAlign:'left'}} className="headerright">
                When it comes to Consultation, Certificate Courses, or Training Programmes, We are to take those tasks with highest integrity and affordability.
            </div>
            <div style={{display: 'flex', justifyContent: 'left', paddingTop:'10px'}}>
                <div className='buttonstuff'>
                    WHAT WE DO
                </div>
            </div> 
        </div>
    </div>
);

export default HomeUnder;