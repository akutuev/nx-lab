import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {

  const tag = schema.tags ?? generateNewTag(schema.name);

  console.log(`tag defined: ${tag}`)

  await libraryGenerator(tree, { name: schema.name, directory: schema.directory, tags: tag });
  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

function generateNewTag(schemaName: string): string {
  const firstPart = schemaName.split('-')[0];
  return firstPart;
}
