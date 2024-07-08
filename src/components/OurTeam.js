/* eslint-disable import/no-anonymous-default-export */
export default ({cardContent}) => 
  <>
    <div className='view-box-header'>
      Our Team
    </div>
    <div className='view-box-description'>
      Founded in 2022, we are a small research and application development shop located in Evanston, Illinois.
    </div>
    <div className='view-box-content'>
    { cardContent
        ? cardContent.map(({name, Description, image, role}, i) =>

           <div className='view-box-team-card'>
              <div className='view-box-team-card-image'>
                <img 
                  src={image} 
                  alt={`team member ${name}`}
                />                  
              </div> 

              <div className='view-box-team-card-body'>
                <div className='view-box-team-card-name'>
                  {name}
                </div>
                <div className='view-box-team-card-role'>
                  {role}
                </div>
                <div className='view-box-team-card-description'>
                  <Description />
                </div>
              </div>
          
          </div>
        )
        : null}
      
    </div>
  </>