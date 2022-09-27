import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { updateJson } from '@nrwl/devkit';

export default async function (tree: Tree, schema: any) {
  // await libraryGenerator(tree, {name: schema.name});
  // await formatFiles(tree);

  


  updateJson(tree, 'nx.json', (json): any => {
    json.defaultProject = "api"

    return json;
  })

  return () => {
    installPackagesTask(tree);
  };
}
