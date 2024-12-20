/* eslint-disable import/no-anonymous-default-export */
export default ({cardContent}) => 
  <>

    <div className='view-box-content'>
    <div className='view-box-header'>
      Connect With Us
    </div>
    <div className='view-box-description'>
      Here are a few ways to contact us depending on what you're after.
    </div>
      { cardContent
        ? cardContent.map(({header, email, text}) =>
            <div className='view-box-content-card'>
              <div className='view-box-content-card-header'>
                {header}
              </div>
              <div className='view-box-content-card-text'>
                {text}
              </div>  
              <div className='view-box-content-card-email'>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
          
          </div>
          )
        : null}
    </div>
  </>