The authoring process consists on authoring the content as described in the other sections of this procedure.

To confirm that the specifications compile correctly and to preview the result, authors can build the Implementation Guide. The [github setup](github_setup.html) described in these SOPs automates an online build at every change (commit or pull request),  which can always be consulted to preview the impact of the changes.

These changes constitute incremental builds, in "development" mode - are fast and frequent iterations of content, possibly responding to change requests.

When doing changes, the author shall verify if the change requires a 

### Release Publication
When the SMART Guideline Implementation Guide is considered ready for a new release, there should be a release publication. The release publication takes the current status of the specification, and freezes it as a named release that is available for referencing.
Releases are published in `https://smart.who.int/<code>`, where `<code>` is the implementation guide code.  

The release publication steps are:

1. Make a PR with a publication request??
2. Optional: Make a new branch?
3. Review the changes since the last release, and define if these are breaking changes or not, and update the version accordingly in the `sushi-config.yaml` or implementation guide `.json` file.  
3.1. If this is the first release, review the entire content and version policy to decide if this is a first official release, or a preview, and define the version number accordingly.

3. Add a publication-request.json   
...
4. Set status to active

5. Set date to current date

6. Run the release publication process

7. Check if all is ok

8. if all is ok, create a release and tag

9. Make a PR to smart.who.int

9. Set status to draft again

10. Merge to main if you created a branch

6. Set release to next


7.