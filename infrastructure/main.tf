terraform {
  cloud {
    organization = "raspberry-kubernetes-cluster"

    workspaces {
      tags = ["tomondre-lil-linko"]
    }
  }
}

module "lil_linko_deployment" {
  source            = "../reusable-modules/full-deployment"
  health_check_path = "/healthcheck"
  image_tag         = var.image_tag
  image_url         = "docker.io/tomondre/lil-linko"
  service_name      = "url"
  port              = 8080
  env               = {
    DATABASE_URL     = var.lil_linko_db_url
    HOST_URL         = "https://url.tomondre.com"
    ABSTRACT_API_KEY = var.lil_linko_abstract_api
  }
}

variable "image_tag" {}
variable "lil_linko_abstract_api" {}
variable "lil_linko_db_url" {}