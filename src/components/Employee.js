import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="06 25 09 29 09"
          />
        </CardSection>

        <CardSection>
          <Button>
            Submit
          </Button>
        </CardSection>

        <CardSection>
        </CardSection>
      </Card>
      );
  }
}

export default EmployeeCreate;
