/* eslint-disable import/no-anonymous-default-export */
export default ({cardContent}) => 
  <>

    <div className='view-box-content'>
    <div className='view-box-header'>
      Our Team
    </div>
    <div className='view-box-description'>
      Founded in 2022, we are a small research and application development shop based in Chicago, Illinois with clients and partners in the US, Mexico, and Europe.
    </div>
    { cardContent
        ? cardContent.map(({name, Description, image, role}) =>

           <article className='view-box-team-card' key={name}>
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
          
          </article>
        )
        : null}
      
    </div>
  </>
