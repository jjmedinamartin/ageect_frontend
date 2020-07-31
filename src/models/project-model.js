export const parseApiToModel = (apiData) => {
  const project = {
    system_id: apiData.system_id,
    name: apiData.name,
    description: apiData.description,
    complexity: apiData.complexity,
    priority: apiData.priority,
    status: apiData.status,
    active: apiData.active,
    createdAt: apiData.createdAt,
    updatedAt: apiData.updatedAt,
  }
  return project;
}

export const getRepresentationalStatus = (status) => {
  switch (status) {
    case 'planning':
      return 'Planning...';
    case 'commited':
      return 'Commited';
    case 'ready_to_start':
      return 'Ready to start';
    case 'in_progress':
      return 'In progress...';
    case 'paused':
      return 'Paused';
    case 'stopped':
      return 'Stopped';
    case 'cancelled':
      return 'Cancelled';
    case 'completed':
      return 'Completed';
    default: return null;
  }
}
