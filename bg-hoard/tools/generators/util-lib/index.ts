import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: schema.name, directory: schema.directory, tags: schema.tags });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
