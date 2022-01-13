# A nodejs Express Hello World App

This is a nodejs app to be containerized with Docker and built in aws with CodeBuild.

The purpose of this app is to use it in a demo in which 2 docker images are built. One for x86 and one for arm architectures. Then a docker manifest is built to be used to pull the right image given a docker pull from an x86 or arm host.

It has 2 buildspec files

## buildspec.yml
This spec is for building a docker image and pushing it to AWS ECR

## buildspec-manifest.yml
This spec is for building a docker manifest from 2 architcture specific images (x86 and arm) and pushing it (the manifest) to AWS ECR

## CodeBuild Project
The CodeBuild Project should declare the following environment variables:
* AWS_DEFAULT_REGION: Region where the ECR repo exists
* AWS_ACCOUNT_ID: Account in which the ECR repo exists
* IMAGE_REPO_NAME: Name of the docker repo
* IMAGE_TAG: image tag

## Building images for different architectures
In CodeBuild, 2 projects can be set up for each of x86 and arm architectures.

To build an image for x86, we can use the CodeBuild image ``amazonlinux2-x86_64-standard:3.0``

To build an image for arm, we can use the CodeBuild image ``amazonlinux2-aarch64-standard:2.0``

The CodeBuild project that builds and pushes the manifest can run in any amazonlinux container, regardless of architecture.

This [repo](nodejs-web-app-infra) has a cdk project that builds a CodePipeline and CodeBuild projects to build the docker images for x86 and arm and the docker manifest pushing them old to ECR

