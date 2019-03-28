import React from "react";
import {TitleView} from "./TitleView";
import {shallow} from "enzyme";

describe('TitleView', function () {
  it('has not changed during refactoring', function () {
    const subject = shallow(<TitleView {...{title: 'title', onClick: () => {}}}/>)
    expect(subject).toMatchSnapshot();
  });
});