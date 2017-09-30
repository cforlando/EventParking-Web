import React from 'react';
import Logo from '../Logo';
import Title from '../Title';

const styles = {
  logo: {

  },
  title: {

  },
}

const TitleBar = () => {
  return(
    <div>
      <Logo imgSrc="http://www.cityoforlando.net/wp-content/uploads/2016/08/citylogo_db.png"></Logo>
      <Title />
    </div>
  );
}
