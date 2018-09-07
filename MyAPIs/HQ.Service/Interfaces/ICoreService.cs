using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using HQ.Entity;
using HQ.Service.Interfaces;

namespace HQ.Service.Interfaces
{
    public interface ICoreService<TEntity> where TEntity : BaseEntity
    {
        IEnumerable<TEntity> GetAll();
        Task<IEnumerable<TEntity>> GetAllAsync();
        IEnumerable<TEntity> GetByForeignId(string foreignField, int id);
        TEntity Get(int id);
        TEntity Insert(TEntity entity);
        TEntity Update(TEntity entity);
        bool Delete(int id);
    }
}
