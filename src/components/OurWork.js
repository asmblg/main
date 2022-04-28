/* eslint-disable import/no-anonymous-default-export */
export default ({cardContent}) => 
  <>
    <div className='view-box-header'>
      Our Work
    </div>
    <div className='view-box-description'>
      We provide services in geospatial anaylsis and visualization, planning research, and full stack application development including: the design, creation, and deployment of custom-built interactive web apps, database development and maintenance, and bug fixes and upgrades to existing applications.    </div>
    <div className='view-box-content'>
    { cardContent
        ? cardContent.map(({header, description, image, link}) =>

           <div className='view-box-work-card'>
              <div className='view-box-work-card-header'>
                {header}
              </div>
              <div className='view-box-work-card-body'>
                <div className='view-box-work-card-image'>
                  <a href={link} target='_blank' rel="noreferrer">
                    <img 
                      src={image} 
                      alt='datanexus screenshot'
                    />                  
                  </a>

                </div>  
                <div className='view-box-work-card-description'>
                  {description}
                </div>
              </div>
          
          </div>
        )
        : null}
      
    </div>
  </>