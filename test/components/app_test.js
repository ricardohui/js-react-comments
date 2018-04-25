import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';
//use 'describe' to group together similar tests
describe('Testing App', ()=>{
  let component;
  
  beforeEach(()=>{
    component = renderComponent(App);
  });
  it('shows a comment box', ()=>{
    expect(component.find('.comment-box')).to.exist;
  });

  it('show a comment list',()=>{
    expect(component.find('.comment-list')).to.exist;
  })

});
