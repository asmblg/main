/* eslint-disable import/no-anonymous-default-export */
export default ({cardContent}) => 
  <>
    <div className='view-box-content'>
    <div className='view-box-header'>
      Our Work
    </div>
    <div className='view-box-description'>
      We provide services in geospatial anaylsis and visualization, planning research, and full stack application development including: the design, creation, and deployment of custom-built interactive web apps, database development and maintenance, and bug fixes and upgrades to existing applications.    </div>

    { cardContent
        ? cardContent.map(({header, Description, image, link}) =>

           <div className='view-box-work-card'>

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
                <div className='view-box-work-card-header'>
                {header}
              </div>
                  <Description />
                </div>
              </div>
          
          </div>
        )
        : null}
      
    </div>
  </>