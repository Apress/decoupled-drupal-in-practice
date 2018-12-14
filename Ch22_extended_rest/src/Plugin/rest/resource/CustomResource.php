<?php

namespace Drupal\extended_rest\Plugin\rest\resource;

use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;

/**
 * Adds a custom resource to the core REST API.
 *
 * @RestResource(
 *   id = "custom_resource",
 *   label = @Translation("Custom resource"),
 *   uri_paths = {
 *     "canonical" = "/custom_resource",
 *   }
 * )
 */
class CustomResource extends ResourceBase {

  /**
   * Issues responses to GET requests.
   * @return \Drupal\rest\ResourceResponse
   */
  public function get() {
    $response = ['message' => 'Hello world!'];
    return new ResourceResponse($response);
  }
}
