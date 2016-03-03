import React from 'react';

function Component({name}) {
  return (
    <div>
      <span>hello {name}</span>
    </div>
  );
}

Component.propTypes = {
  name: React.PropTypes.string
};

export default Component;
