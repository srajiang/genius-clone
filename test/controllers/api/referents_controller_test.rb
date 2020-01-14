require 'test_helper'

class Api::ReferentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_referents_index_url
    assert_response :success
  end

  test "should get create" do
    get api_referents_create_url
    assert_response :success
  end

end
